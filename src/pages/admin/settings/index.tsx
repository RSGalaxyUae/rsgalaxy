/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import GeneralSettingForm from '@/components/settings/GeneralSettingForm'
import SettingsLayout from '@/components/settings/layout'
import { convertNullToUndefined } from '@/lib/utils'
import { api } from '@/utils/api'
import { Loader2Icon } from 'lucide-react'
import React from 'react'

const SettingsPage = () => {
  const {data, isLoading} = api.setting.get.useQuery({type: 'GENERAL_SETTING'})
  return (
    <SettingsLayout>
      {
        !isLoading ? <GeneralSettingForm data={convertNullToUndefined(data)} /> : <div><Loader2Icon className='animate-spin w-10 h-10' /></div>
      }
    </SettingsLayout>
  )
}

export default SettingsPage