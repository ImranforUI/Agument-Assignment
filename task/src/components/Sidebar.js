import React from "react";

let Sidebar = () => {
    return (
        <React.Fragment>
            <div className='aside'>
                <p className="h5 ml-2">
                    <i className='fa fa-user text-warning' />
                    <span className='ml-2'>TiiMi</span>
                </p>
                <ul className='list-unstyled mt-4 ml-2'>
                    <li>
                        <i className='fa fa-sitemap' />
                        <span className='ml-2'>Dashboard</span>
                    </li>
                    <li className='my-3'>
                        <i className='fa fa-download' />
                        <span className='ml-2'>Inbox</span>
                    </li>
                    <li>
                        <i className='fa fa-box' />
                        <span className='ml-2'>Calender & Todos</span>
                    </li>
                </ul>
                <p className="small lead">RECRUITMENT</p>
                <ul className='list-unstyled ml-2'>
                    <li className='active bg-warning text-dark p-2'>
                        <i className='fa fa-' />
                        <span className='ml-2'>Jobs</span>
                    </li>
                    <li className='my-2'>
                        <i className='fa fa-users' />
                        <span className='ml-2'>Candidates</span>
                    </li>
                    <li>
                        <i className='fa fa-shield' />
                        <span className='ml-2'>My Referrals</span>
                    </li>
                    <li className='my-2'>
                        <i className='fa fa-laptop' />
                        <span className='ml-2'>Career Sites</span>
                    </li>
                </ul>
                <p className="small lead">ORGANIZATION</p>
                <ul className='list-unstyled'>
                    <li>
                        <i className='fa fa-user' />
                        <span className='ml-2'>Employee</span>
                    </li>
                    <li className='my-3'>
                        <i className='fa fa-dashboard' />
                        <span className='ml-2'>Structure</span>
                    </li>
                    <li>
                        <i className='fa fa-map' />
                        <span className='ml-2'>Report</span>
                    </li>
                    <li className='my-3'>
                        <i className='fa fa-shield' />
                        <span className='ml-2'>Settings</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Sidebar;