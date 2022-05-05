import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';

function Settings() {

  const settings = useContext(SettingsContext);
  console.log(settings)
  return (
    <div id="settings-container">
      <button onClick={() => settings.toggleCompletedPage()} >Toggle Completed</button>
    </div>
  )
}

export default Settings;