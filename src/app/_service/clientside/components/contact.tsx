'use client'

import { useAppSelector } from '@/app/_service/clientside/redux'
import { Button, Stack, TextField } from '@mui/material'
import * as React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function BodyContact() {
    const [nameInput, setNameInput] = React.useState<string>('')
    const [message, setMessage] = React.useState<string>('')

    const themeMode = useAppSelector((state) => state.global.themeMode.mode)

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()

        const messageUrl = `https://wa.me/6289513297524?text=${encodeURIComponent(
            `Halo, nama saya ${nameInput}. ${message}`
        )}`

        window.open(messageUrl, '_blank')
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <Stack spacing={2}>
                    <TextField name='nameInput' value={nameInput || ''} required
                        onChange={(e) => {
                            const value = e.target.value

                            const checkRegex = /^[A-Za-z\s]+$/

                            if (!checkRegex.test(value) && value.length > 0) {
                                return;
                            }

                            setNameInput(value)
                        }} label='Full Name'
                        sx={{
                            borderRadius: '10px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                '&:hover fieldset': {
                                    borderColor: '#fff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#475569',
                                },
                            },
                            '& label.Mui-focused': {
                                color: '#475569',
                            },
                        }} />
                    <TextField name='message' value={message || ''} required
                        multiline
                        minRows={4}
                        onChange={(e) => setMessage(e.target.value)} label='Message'
                        sx={{
                            borderRadius: '10px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                '&:hover fieldset': {
                                    borderColor: '#fff',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#475569',
                                },
                            },
                            '& label.Mui-focused': {
                                color: '#475569',
                            },
                        }} />
                    <Button type='submit'
                        disabled={!message || !nameInput} size='medium'
                        sx={{
                            textTransform: 'none',
                            borderRadius: '10px',
                            bgcolor: themeMode === 'dark' ? '#475569' : '',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} variant='contained'>
                            <span className='mr-2'><WhatsAppIcon /></span>Send Messages</Button>
                </Stack>
            </form>
        </div>
    );
}