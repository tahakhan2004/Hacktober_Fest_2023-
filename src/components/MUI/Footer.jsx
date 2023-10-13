import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FaRedditAlien } from "react-icons/fa"
import { BsMastodon } from "react-icons/bs"
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className='bg-black py-8 px-10 relative w-full bottom-0 mt-10'>
                <Stack direction={{ sm: "column", md: "row" }} justifyContent={"space-between"} alignItems={"center"} spacing={{ xs: 3, md: 0 }}>
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "Dancing Script, cursive" }}>Devon Eriksen</Typography>
                    <Stack direction={{ md: "row", sm: "column", }} className='text-white' alignItems={"center"} spacing={{ sm: 1, md: 2 }} >
                        <NavLink to={"/"} className="links icons">
                            HOME
                        </NavLink>
                        <NavLink to={"/novels"} className="links">
                            NOVELS
                        </NavLink>
                        <NavLink to={"/events"} className="links">
                            EVENTS
                        </NavLink>
                        <NavLink to={"/about"} className="links">
                            ABOUT
                        </NavLink>
                        <NavLink to={"/media"} className="links">
                            MEDIA
                        </NavLink>
                        <NavLink to={"/writing"} className="links">
                            WRITING
                        </NavLink>
                        <NavLink to={"/contact"} className="links">
                            CONTACT
                        </NavLink>
                    </Stack>
                    <Stack direction="row" spacing={1.5} justifyContent="center">
                        <a href='https://www.facebook.com/DevonEriksen/' target='_blank'>
                            <FaFacebookSquare className='icons' size={30} />
                        </a>

                        <a href='https://twitter.com/Devon_Eriksen_' target='_blank'>
                            <RiTwitterXLine className='icons' size={30} />
                        </a>
                        <a href='https://www.reddit.com/user/devoneriksenwrites/' target='_blank'>
                            <FaRedditAlien className='icons' size={30} />
                        </a>
                        <a href='https://mastodon.social/@DevonEriksen' target='_blank'>
                            <BsMastodon className='icons' size={30} />
                        </a>
                    </Stack>
                </Stack>

                <Typography variant="body1" sx={{ marginTop: 3, color: "white", textAlign: "center", fontFamily: "" }}>
                    Copyright © 2023 Devon Eriksen | Designed by Team Page Perfect
                </Typography>
            </div>
        </>
    )
}

export default Footer
