import React from "react";
import Navbar from "../components/Navbar";
import AboutPage from "./about";
import styled from "styled-components";
import '../styles/table.css'
import {Container} from "../components/Container";

const Quotes = () => {
        return (

            <Container>

                    <table>
                        <tr><th>author</th><th>quote</th><th>referenced</th></tr>
                        <tr><td>Henry Wadsworth Longfellow</td><td>Welcome to a foreign fireside</td><td>To An Old Danish Songbook</td></tr>
                        <tr><td>Leonard Cohen</td><td>Hope you're keeping some kind of record</td><td>Famous Blue Raincoat</td></tr>
                        <tr><td>George Orwell</td><td>Four legs good, two legs bad</td><td>Animal Farm</td></tr>
                        <tr><td>George Orwell</td><td>Four legs good, two legs ..better</td><td>Animal Farm</td></tr>
                        <tr><td>Rutger Hauer</td><td>I've seen things you people would not believe</td><td>BladeRunner</td></tr>
                        <tr><td>Frank Herbert</td><td>It was mostly sweet, and you where the sweetest of all</td><td>Dune Messiah</td></tr>
                    </table>

            </Container>
    )
}

export default Quotes