import React from 'react'

export default function Drawer() {

  const [drawer, setDrawer] = React.useState(false)


  return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label for="my-drawer" className="btn btn-primary drawer-button text-green">Open drawer</label>
        </div> 
        <div className="drawer-side">
            <label for="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>
  )
}
