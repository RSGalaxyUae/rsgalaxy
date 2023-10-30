/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Button } from '@/components/ui/button';
import { convertNullToUndefined } from '@/lib/utils';
import { api } from '@/utils/api';
import { supabaseRemove, supabaseUpload } from '@/utils/fileUpload';
import { getSupabseUploadUrl } from '@/utils/supabase';
import { Loader2 } from 'lucide-react';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from '@/components/ui/use-toast';
import { CreatePopupInput, CreatePopupSchema, PopupData, UpdatePopupInput, UpdatePopupSchema } from '@/schema/PopupSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';


export const PopupCard = ({
    data
}: {
    data?: PopupData
}) => {
    const [previewImage, setPreviewImage] = useState<string | undefined>(data?.content.image?.publicUrl);
    const [uploading, setUploading] = useState<boolean>();
    const createMutation = api.popup.create.useMutation();
    const deleteMutation = api.popup.delete.useMutation();
    const updateMutation = api.popup.update.useMutation();
    const [recentUpload, setRecentUpload] = useState<{ path: string }>();
    const form = useForm<CreatePopupInput | UpdatePopupInput>({
        resolver: zodResolver(data ? UpdatePopupSchema : CreatePopupSchema),
        defaultValues: { ...data }
    })
    const { toast } = useToast()
    const ctx = api.useContext().popup;
    const id = `${nanoid()}`


    const change = async (prevAPath: string, data: UpdatePopupInput) => {
        await supabaseRemove([prevAPath])
        return await saveContent(data)
    }

    const saveContent = async (value: CreatePopupInput | UpdatePopupInput) => {
        if (data) {
            return await updateMutation.mutateAsync(value as UpdatePopupInput)
        }
        return await createMutation.mutateAsync(value as CreatePopupInput)
    }

    const onSubmit = async (values: CreatePopupInput | UpdatePopupInput) => {
        if (uploading || createMutation.isLoading || updateMutation.isLoading) return;
        try {
            const res = await saveContent(values);
            setRecentUpload(undefined);
            await ctx.invalidate();
            toast({ title: "Popup saved successfully!" })
            console.log({ values })
            form.reset();
        } catch (error) {
            toast({ title: 'Popup saving failed' })
        }
    }


    const upload = async (file: File) => {
        try {
            setUploading(true);
            const res = await supabaseUpload(file);
            if (res.error && !res.data) {
                setPreviewImage(undefined);
                return toast({ title: 'Image uploading failed' });
            }
            const isChangable = recentUpload || data && data.content.image?.path
            if (isChangable) {
                await supabaseRemove([recentUpload?.path || data?.content.image?.path!]);
            }
            form.setValue('content.image.path', res.data.path);
            form.setValue('content.image.publicUrl', getSupabseUploadUrl(res.data.path))
            toast({ title: 'Image uploaded successfully' })
            setRecentUpload({ path: res.data.path })

        } catch (error: any) {
            toast({
                title: 'Image uploading failed',
                description: error.message,
                variant: 'destructive'
            })
        } finally {
            setUploading(false)
        }
    }

    const remove = async () => {
        if (!data) return;
        try {
            setUploading(true)
            const res = await supabaseRemove([recentUpload?.path || data.content.image?.path!]);
            if (res.error && !res.data) {
                toast({ title: 'File removing failed', variant: 'destructive' });
                return
            }
            const removed = await deleteMutation.mutateAsync({ id: data.id });
            await ctx.invalidate();
            setUploading(false);
            toast({ title: "Popup removed successfully!" })
        } catch (error) {
            toast({ title: 'File removing failed', variant: 'destructive' })
        } finally {
            setUploading(false)
        }
    }


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            void upload(files[0]);
        }
    }

    useEffect(() => {
        console.log({ recentUpload })
    }, [recentUpload])

    if (uploading) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <Loader2 className='w-10 h-10 animate-spin text-gray-500' />
            </div>
        )
    }

    return (

        <div className=" w-full">
            <label htmlFor={id} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                {
                    (previewImage || recentUpload) && !uploading ?
                        <div className='w-full h-full bg-center bg-contain bg-no-repeat ' style={{ backgroundImage: `url(${recentUpload ? getSupabseUploadUrl(recentUpload.path) : previewImage})` }}>
                            <div className="w-full h-full flex items-center justify-center group gap-3 hover:backdrop-blur-sm transition-all duration-300">
                                <Button variant={'secondary'} className='pointer-events-none group-hover:opacity-100 opacity-0 transition-all duration-300'>Change</Button>
                                {
                                    data && <Button onClick={() => void remove()} variant={'destructive'} className='group-hover:opacity-100 opacity-0 transition-all duration-300'>Remove</Button>
                                }
                            </div>
                        </div>
                        :
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
                        </div>
                }
                <input id={id} type="file" className="hidden" onChange={handleOnChange} />
            </label>

            <div className="pt-3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=''>
                        <div className="flex items-center gap-2">
                            <div className="flex-grow">
                                <FormField
                                    name='content.href'
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>Link</FormLabel> */}
                                            <FormControl>
                                                <Input placeholder='Enter the redirect link' {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex-grow-0">
                                <FormField
                                    control={form.control}
                                    name="enabled"
                                    render={({ field }) => (
                                        <FormItem >
                                            
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="pt-3">
                            <Button className='w-full' disabled={uploading || createMutation.isLoading || updateMutation.isLoading || !form.formState.isValid} type='submit'>Save</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>

    )
}

const ComissionCharts = () => {
    const { data, isLoading } = api.popup.getAll.useQuery({})

    if (isLoading) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    Array(4).fill(null).map(arr => {
                        return <Skeleton key={nanoid()} className='w-full h-64 bg-slate-200' />

                    })
                }
            </div>
        )
    }
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                data?.data.map(d => {
                    return (
                        <div key={nanoid()}>
                            <PopupCard data={convertNullToUndefined(d)} />
                        </div>
                    )
                })
            }
            <div><PopupCard /></div>
        </section>
    )
}

export default ComissionCharts