import GeneralSettingForm from '@/components/settings/GeneralSettingForm'
import IntegrationSetting from '@/components/settings/IntegrationSetting'
import SettingsLayout from '@/components/settings/layout'
import React from 'react'

const IntegrationSettingsPage = () => {
  return (
    <SettingsLayout>
      <IntegrationSetting/>
    </SettingsLayout>
  )
}

export default IntegrationSettingsPage