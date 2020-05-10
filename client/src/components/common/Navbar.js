import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

export default function Navbar(props) {
    const listRoutes = props.routes;
    console.log(listRoutes);
    return <div>
            <List>
                {listRoutes.map(({path, noRender, sidebarName, ...prop}, index) => {
                    if (noRender) {
                        return null;
                    }
                    return (<Link to={path} key={`route-${index}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <prop.icon/>
                                </ListItemIcon>
                                <ListItemText primary={sidebarName}/>
                            </ListItem>
                        </Link>
                    )
                })
                }
            </List>
        </div>
}
