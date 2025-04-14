import { useState, useMemo, useContext } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import BIcon from '../BIcon'
import { Link } from 'react-router-dom'

import logo from "../../img/icon.png"
const products = [
  { name: 'Quick Share', description: 'Send and receive end-to-end encrypted files.', href: '/quick-share', icon: "grid-fill" },
  { name: 'Zip', description: 'Create zip archives in the browser.', href: '/tools/zip-files-online', icon: "lightbulb" },
  { name: 'Unzip', description: 'View zip archives in the browser.', href: '/tools/unzip-files-online', icon: "grid-fill" },
  { name: 'HEIC to JPG', description: 'Convert HEIC files in the browser.', href: '/tools/heic-convert', icon: "transparency" },
]

export default function SelfHostHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="backdrop-blur bg-gray-50 bg-opacity-70 fixed top-0 left-0 w-full z-10 border-b">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-x-1">
            {/* <span className="sr-only">{process.env.REACT_APP_SITE_NAME}</span> */}
            <img
              alt="Logo"
              src={logo}
              className="h-8 w-auto"
            />
            <span className='font-bold'>{process.env.REACT_APP_SITE_NAME}</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <BIcon name={"list"} aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      </header>
  )
}
