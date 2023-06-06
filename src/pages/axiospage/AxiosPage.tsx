import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import { Box, Button, FormControl, Modal, TextField } from '@mui/material'
import styles from './AxiosPage.module.css'

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}


function AxiosPage() {
    const [modalOpen, setModalOpen] = React.useState(false)
    const [axiosData, setAxiosData] = useState<any>([

    ])
    const [textFieldData, setTextFieldData] = useState('')
    const [emailTextField, setEmailTextField] = useState('')
    const [user, setUser] = useState('')
    const [editId, setEditId] = useState(null)

    const [placeholder, setPlaceholder] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setAxiosData(res.data)

            })
    }, [])





    const onClickAdd = async (element: any) => {
        let newArr = [...axiosData]

        if (emailTextField !== "" && textFieldData !== "" && user !== "") {
            try {
                await axios.post('https://jsonplaceholder.typicode.com/users', { name: element, username: user, email: emailTextField })
                let postResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(postResponse)
            } catch (error) {
                console.log("post error", error)
            }
        }
    }

    const onClickDelete = async (element: any, index: any) => {
        let newArr = [...axiosData]

        try {
            let response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${index}`)
            let deleteResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(deleteResponse)
        } catch (error) {
            console.log("some error occured", error)
        }
    }

    const onClickEdit = (element: any, index: any) => {
        setEditId(index)
        setEmailTextField(element.email)
        setTextFieldData(element.name)
        setUser(element.username)
    }


    const onClickModalEditName = (updatedName: any) => {
        let newArr = [...axiosData]

        try {
            newArr.forEach(async (element: any, index: any) => {
                if (index == editId) {
                    element.name = updatedName
                    element.username = user
                    element.email = emailTextField
                    // setAxiosData(newArr)
                    await axios.put(`https://jsonplaceholder.typicode.com/users/${index + 1}`, { name: updatedName, username: user, email: emailTextField })
                    let editResponse = await axios.get("https://jsonplaceholder.typicode.com/users")
                    console.log(editResponse)
                }
            })
        } catch (error) {
            console.log("error from edit", error)
        }



    }

    const onChangeTextField = (data: any) => {
        setTextFieldData(data)
    }
    const onChangeEmailInput = (data: any) => {
        setEmailTextField(data)
    }
    const onChangeUser = (data: any) => {
        setUser(data)

    }
    return (
        <div>
            <h1>AXIOS LIBRARY IN REACT JS</h1>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Button
                    variant='contained'
                    onClick={() => {
                        setModalOpen(true)
                    }}
                >
                    ADD AXIOS
                </Button>
                <Modal
                    open={modalOpen}
                    onClose={() => {
                        setModalOpen(false)
                    }}
                >
                    <Box
                        sx={modalStyle}
                    >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", margin: "1rem auto" }}>
                            <div>
                                <TextField
                                    variant='outlined'
                                    onChange={(e) => { onChangeTextField(e.target.value) }}
                                    value={textFieldData}
                                    placeholder="NAME"
                                />
                            </div>
                            <div>
                                <TextField
                                    variant='outlined'
                                    onChange={(e) => { onChangeUser(e.target.value) }}
                                    value={user}
                                    placeholder='USER NAME'
                                />
                            </div>
                            <div>
                                <TextField
                                    variant='outlined'
                                    onChange={(e) => { onChangeEmailInput(e.target.value) }}
                                    value={emailTextField}
                                    placeholder='EMAIL'
                                />
                            </div>
                            <div>
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        onClickAdd(textFieldData)
                                        setModalOpen(false)
                                    }}
                                >
                                    POST (ADD)
                                </Button>
                            </div>
                            <div>
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        setModalOpen(false)
                                        onClickModalEditName(textFieldData)
                                        // onClickModalEditEmail(emailTextField)
                                        // onClickModalEditUser(user)
                                    }}
                                >
                                    PUT (EDIT)
                                </Button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", margin: "1rem auto" }}>


            </div>

            <table className={styles.table}>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>User Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
                {axiosData.map((element: any, index: any) => (
                    <tr>
                        <td>{element.id = index + 1}</td>
                        <td>{element.name}</td>
                        <td>{element.username}</td>
                        <td>{element.email}</td>
                        <td>
                            <div style={{ display: "flex", gap: "1rem" }}>
                                <Button
                                    variant='contained'
                                    sx={{ backgroundColor: "primary" }}
                                    onClick={() => {
                                        onClickEdit(element, index)
                                        setModalOpen(true)
                                    }}
                                >
                                    PUT (EDIT)
                                </Button>
                                <Button
                                    variant='contained'
                                    sx={{ backgroundColor: "primary" }}
                                    onClick={() => { onClickDelete(element, index) }}
                                >
                                    DELETE
                                </Button>
                            </div>

                        </td>
                    </tr>

                ))}
            </table>
        </div >
    )
}

export default AxiosPage