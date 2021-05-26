import React, { useEffect ,useState } from 'react'
import api from '../../services/api'
import menu from "../../Models/Menu"
import {Item} from "../../Models/Item"
import './styles.css'

export default function Login({ history }) {
    const [menus, setMenus] = useState('')


    useEffect(() => {
        async function loadMenus() {
            const response = await api.get('/menu')


            const { id, name, items } = response.data
            console.log(id);
            console.log(name);
            console.log(items);

            setMenus({id, name, items})
        }

        loadMenus();
        
    }, [])
        // localStorage.setItem('user', "lucas")

        // history.push('/dashboard')
    

    return (
        <>
            <div className="content-menu"> 
                <div className="header-menu">Cardápio</div>
                {menus.map(menuItem => (
                    <div className="menu-item">
                    
                        <div className="img"><img src={menuItem.id + ".jpg"} alt={menuItem.id}></img></div>
                        <div className="content-menu-item">
                            <div className="igredientes">
                                {menuItem.items.map(item => (
                                    <p></p>
                                ))}
                            </div>
                            <div className="adicionar">
                                <button type="submit" className="adicionar-button">Pedir</button>
                            </div>
                        </div>
                    </div>
                ))}
               
            </div>

            <div className="content-menu-adicionais">
                <div className="header-menu">Adicionais</div>
                <div className="items">
                    <div className="img"><img src="" alt="item"></img></div>
                    <div className="content-item">
                        <div className="igredientes"></div>
                        
                    </div>
                </div>

            </div>

            
            
        </>
    )
}