/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type CreateIntegrationSettingInput, CreateIntegrationSettingSchema, type CreateSettingInput, UpdateIntegrationSchema, type UpdateIntegrationSettingInput, type UpdateSettingInput, IntegrationSettingOutput } from '@/schema/settingSchema';
import { api } from '@/utils/api';
import React, { useEffect } from 'react'
import { useToast } from '../ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import PhoneInput from '../shared/PhoneInput';
import { Button } from '../ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Switch } from '../ui/switch';
import { convertNullToUndefined } from '@/lib/utils';


const SettingCard = ({
    title,
    desc,
    children
}: {
    title: string,
    desc?: string,
    children?: any
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {
                    desc && <CardDescription>{desc}</CardDescription>
                }
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}


const IntegrationSetting = ({
    integrations
}: {
    integrations?: IntegrationSettingOutput
}) => {
    // const { data:integrations, isLoading } = api.setting.get.useQuery<IntegrationSettingOutput>({ type: 'INTEGRATION' });
    const createSettingMutation = api.setting.create.useMutation();
    const updateSettingMutation = api.setting.update.useMutation();
    const { toast } = useToast();


    const form = useForm<CreateIntegrationSettingInput | UpdateIntegrationSettingInput>({
        resolver: zodResolver(integrations ? UpdateIntegrationSchema : CreateIntegrationSettingSchema),
        defaultValues: integrations ? {...convertNullToUndefined(integrations)} :  { type: 'INTEGRATION', lable: 'Integrations' }
    })

    function onSubmit(values: CreateSettingInput | UpdateSettingInput) {
        void save(values)
        console.log({ values })
    }

    async function save(value: CreateSettingInput | UpdateSettingInput) {
        console.log({value})
        try {
            if (integrations) {
                await updateSettingMutation.mutateAsync(value as UpdateSettingInput)
            } else {
                await createSettingMutation.mutateAsync(value as CreateSettingInput);
            }
            toast({
                title: 'Setting saved successfully!',
            })

        } catch (error) {
            toast({
                title: 'There is problem in saving setting!',
                variant: 'destructive'
            })
        }
    }


    // useEffect(() => {
    //     console.log({ ...form.formState.errors }, {integrations: convertNullToUndefined(integrations)}, {defalu: form.formState.defaultValues})
    //     console.log("===== VIEW ======");
        
    // }, [form.formState])

    return (
        <Form  {...form}  >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

               

                <SettingCard title='Whatsapp Setting'>
                    <FormField
                        control={form.control}
                        name='value.whatsapp.number'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Whatsapp Number</FormLabel>
                                <FormControl>
                                    <PhoneInput {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </SettingCard>

                <SettingCard title='Tawk.to Setting'>
                    <FormField
                        
                        name='value.tawkto.propertyId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property Id</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                       
                        name='value.tawkto.widgetId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Widget Id</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                       
                        name="value.tawkto.enabled"
                        render={({ field }) => (
                            <FormItem className="flex flex-col mt-3">
                                <FormLabel>Enabled</FormLabel>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </SettingCard>


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

export default IntegrationSetting