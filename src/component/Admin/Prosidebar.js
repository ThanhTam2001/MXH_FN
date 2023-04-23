import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineUnorderedList } from 'react-icons/ai'
import './prosidebar.css'
const Prosidebar = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    return (
        <>
            <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
                <Sidebar className='menu'  >
                    <Menu>
                        
                        <SubMenu label="HOME">
                            <MenuItem>
                                <Link to='/admin/alluser'>ALL USER</Link>
                            </MenuItem>
                            <MenuItem> ALL STATUS </MenuItem>
                        </SubMenu>
                        <MenuItem> GROUP </MenuItem>
                        <MenuItem> SETTING </MenuItem>
                    </Menu>
                    <main style={{ padding: 10 }}>
                        <div>

                            <label class="switch">
                                <input onClick={() => collapseSidebar()} type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </main>
                </Sidebar>

            </div>




        </>
    )
}
export default Prosidebar