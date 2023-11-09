import GeneralSettingForm from '@/components/settings/GeneralSettingForm'
import IntegrationSetting from '@/components/settings/IntegrationSetting'
import SettingsLayout from '@/components/settings/layout'
import { IntegrationSettingOutput } from '@/schema/settingSchema'
import { api } from '@/utils/api'
import { Loader2Icon } from 'lucide-react'
import React from 'react'

const IntegrationSettingsPage = () => {
  const {data, isLoading} = api.setting.get.useQuery<IntegrationSettingOutput>({type: 'INTEGRATION'});
  return (
    <SettingsLayout>
      {
        !isLoading ? <IntegrationSetting integrations={data}/> : <div className='my-10 flex items-center'><Loader2Icon className='w-10 h-10 animate-spin' /></div>
      }
    </SettingsLayout>
  )
}

export default IntegrationSettingsPage