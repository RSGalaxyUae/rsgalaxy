/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateIntegrationSettingInput, CreateIntegrationSettingSchema, CreateSettingInput, CreateSettingSchema, UpdateIntegrationSchema, UpdateIntegrationSettingInput, UpdateSettingInput, UpdateSettingSchema } from '@/schema/settingSchema';
import { api } from '@/utils/api';
import React, { useEffect } from 'react'
import { useToast } from '../ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import PhoneInput from '../shared/PhoneInput';
import { Button } from '../ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Switch } from '../ui/switch';


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


const IntegrationSetting = () => {
    const { data: integrations, isLoading } = api.setting.get.useQuery({ type: 'INTEGRATION' });
    const createSettingMutation = api.setting.create.useMutation();
    const updateSettingMutation = api.setting.update.useMutation();
    const { toast } = useToast();


    const form = useForm<CreateIntegrationSettingInput | UpdateIntegrationSettingInput>({
        resolver: zodResolver(integrations ? UpdateIntegrationSchema : CreateIntegrationSettingSchema),
        defaultValues: { type: 'INTEGRATION', lable: 'Integrations' }
    })

    function onSubmit(values: CreateSettingInput | UpdateSettingInput) {
        void save(values)
        console.log({ values })
    }

    async function save(value: CreateSettingInput | UpdateSettingInput) {
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

    useEffect(() => {
        if (integrations) {
            Object.entries(integrations).map(([key, value]) => {
                form.setValue(key as any, value)
                console.log("Update: ", key, value)
            })
        }
    }, [integrations])

    useEffect(() => {
        console.log({ ...form.formState.errors })
    }, [form.formState])

    return (
        <Form  {...form}  >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                {
                    integrations?.id &&
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
                        control={form.control}
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
                        control={form.control}
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
                        control={form.control}
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

export default IntegrationSetting