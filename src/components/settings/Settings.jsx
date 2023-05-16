import { Fragment } from "react"
import "./settings.css"
import "flowbite"

const Settings = () => {
  return (
    <>

    <h1 className="text-center mt-2">Settings</h1>
    <div className="flex flex-col gap-7 mt-12">
        <div className="flex felx-row justify-between">
            <h3 className="px-2">Vibration</h3>
            <label class="relative inline-flex items-center cursor-pointer mx-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

            </label>
        </div>
        <div className="flex felx-row justify-between ">
            <h3 className="px-2">Sounds</h3>
            <label class="relative inline-flex items-center cursor-pointer mx-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

            </label>
        </div>
    </div>
    
    </>
  )
}

export default Settings;
