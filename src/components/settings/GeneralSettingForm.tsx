/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateSettingInput, CreateSettingSchema, UpdateSettingInput, UpdateSettingSchema } from '@/schema/settingSchema'
import { api } from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Separator } from '../ui/separator'
import { useEffect } from 'react'
import PhoneInput from '../shared/PhoneInput'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useToast } from '../ui/use-toast'


const GeneralSettingForm = () => {
  const { data: generalSetting, isLoading } = api.setting.get.useQuery({ type: 'GENERAL_SETTING' });
  const createSettingMutation = api.setting.create.useMutation();
  const updateSettingMutation = api.setting.update.useMutation();
  const settingCtx = api.useContext()
  const { toast } = useToast();


  const form = useForm<CreateSettingInput|UpdateSettingInput>({
    resolver: zodResolver(generalSetting?.id ? UpdateSettingSchema: CreateSettingSchema),
    defaultValues: { type: 'GENERAL_SETTING', lable: 'General Setting' }
  })

  function onSubmit(values: CreateSettingInput | UpdateSettingInput) {
    void save(values)
  }

  async function save(value: CreateSettingInput | UpdateSettingInput) {
    try {
      if (generalSetting) {
        await updateSettingMutation.mutateAsync(value as UpdateSettingInput)
      } else {
        await createSettingMutation.mutateAsync(value as CreateSettingInput);
      }
      toast({
        title: 'Setting saved successfully!',
      })
      await settingCtx.setting.invalidate()
    } catch (error) {
      toast({
        title: 'There is problem in saving setting!',
        variant: 'destructive'
      })
    }
  }

  useEffect(() => {
    if (generalSetting) {
      Object.entries(generalSetting).map(([key, value]) => {
        form.setValue(key as any, value)
      })
    }
  }, [generalSetting])

  return (
    <Form  {...form}  >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        {
          generalSetting?.id && 
          <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <FormItem hidden>
              <FormLabel>Lable</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        }

        <FormField
          control={form.control}
          name='lable'
          render={({ field }) => (
            <FormItem hidden>
              <FormLabel>Lable</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem hidden>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.contact.email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.contact.phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <PhoneInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator></Separator>
        <FormField
          control={form.control}
          name='value.contact.address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.contact.city'
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.contact.country'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.contact.pincode'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pincode</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

            <Separator className='my-4'/>

        <FormField
          control={form.control}
          name='value.socialLinks.facebook'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input placeholder='facebook link' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.socialLinks.instagram'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram</FormLabel>
              <FormControl>
                <Input placeholder='instagram link' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.socialLinks.linkedIn'
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn</FormLabel>
              <FormControl>
                <Input placeholder='linkedin link' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value.socialLinks.twitter'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input placeholder='twitter link' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className='flex justify-end'>
          <Button type="submit" disabled={createSettingMutation.isLoading || updateSettingMutation.isLoading || isLoading}>
            {
              (createSettingMutation.isLoading || updateSettingMutation.isLoading) ?
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Saving
                </>
                : 'Save'
            }
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default GeneralSettingForm