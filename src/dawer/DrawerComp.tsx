import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItem, ListItemText, IconButton, Stack } from '@mui/material'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
function DrawerComp(props: any) {
    const routes = props.routes.map((element: any) => (
        <ListItemButton onClick={() => {
            setOpen(false)
        }}
        >
            <ListItemText sx={{ color: "black", backgroundColor: "red" }}>
                <Link
                    to={element.path}
                >
                    {element.name}
                </Link>
            </ListItemText>

        </ListItemButton>
    ))

    const [open, setOpen] = useState(false)
    return (
        < div >
            <Box>
                <IconButton onClick={() => { setOpen(true) }}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    PaperProps={{
                        sx: { width: "10%" },
                    }}
                    open={open} onClose={() => { setOpen(false) }} >

                    <List>

                        <Stack>
                            {routes}
                        </Stack>

                    </List>

                </Drawer>
            </Box>
        </div >
    )
}

export default DrawerComp