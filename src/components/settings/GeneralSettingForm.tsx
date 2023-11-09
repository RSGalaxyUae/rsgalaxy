/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type CreateSettingInput, CreateSettingSchema, type UpdateSettingInput, UpdateSettingSchema, GeneralSettingOutput } from '@/schema/settingSchema'
import { api } from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Separator } from '../ui/separator'
import PhoneInput from '../shared/PhoneInput'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useToast } from '../ui/use-toast'
import { cn, convertNullToUndefined } from '@/lib/utils'


const GeneralSettingForm = ({
  data
}: {
  data?: GeneralSettingOutput
}) => {
  // const { data: data, isLoading } = api.setting.get.useQuery({ type: 'GENERAL_SETTING' });
  const createSettingMutation = api.setting.create.useMutation();
  const updateSettingMutation = api.setting.update.useMutation();
  const settingCtx = api.useUtils();
  const { toast } = useToast();


  const form = useForm<CreateSettingInput | UpdateSettingInput>({
    resolver: zodResolver(data ? UpdateSettingSchema : CreateSettingSchema),
    defaultValues: data ? convertNullToUndefined(data) : { type: 'GENERAL_SETTING', lable: 'General Setting' }
  })

  const { fields: phoneField, append } = useFieldArray({
    name: "value.contact.phone",
    control: form.control,
  })
  const emailField = useFieldArray({
    name: "value.contact.email",
    control: form.control,
  })

  function onSubmit(values: CreateSettingInput | UpdateSettingInput) {
    void save(values)
  }

  async function save(value: CreateSettingInput | UpdateSettingInput) {
    try {
      if (data) {
        await updateSettingMutation.mutateAsync(convertNullToUndefined(value) as UpdateSettingInput)
      } else {
        await createSettingMutation.mutateAsync(convertNullToUndefined(value) as CreateSettingInput);
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


  return (
    <Form  {...form}  >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        
        <div>
          {emailField.fields.map((field, index) => (
            <FormField
              // control={form.control}
              key={field.id}
              name={`value.contact.email.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => emailField.append({value: ""})}
          >
            Add Email
          </Button>
        </div>
        <div>
          {phoneField.map((field, index) => (
            <FormField
              // control={form.control}
              key={field.id}
              name={`value.contact.phone.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Phones
                  </FormLabel>
                  <FormControl>
                    <PhoneInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({value: ''})}
          >
            Add Phone
          </Button>
        </div>
        
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

        <Separator className='my-4' />

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
          <Button type="submit" disabled={createSettingMutation.isLoading || updateSettingMutation.isLoading}>
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