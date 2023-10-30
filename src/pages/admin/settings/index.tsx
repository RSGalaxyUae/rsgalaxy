import GeneralSettingForm from '@/components/settings/GeneralSettingForm'
import SettingsLayout from '@/components/settings/layout'
import React from 'react'

const SettingsPage = () => {
  return (
    <SettingsLayout>
      <GeneralSettingForm/>
    </SettingsLayout>
  )
}

export default SettingsPage