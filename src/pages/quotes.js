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
                        <tr><th  style={{backgroundColor: 'darkslategrey'}}>Quotes in this site</th></tr>
                        <tr><th>author</th><th>quote</th><th>referenced</th></tr>
                        <tr><td>Henry Wadsworth Longfellow</td><td>Welcome to a foreign fireside</td><td>To An Old Danish Songbook</td></tr>
                        <tr><td>Leonard Cohen</td><td>Hope you're keeping some kind of record</td><td>Famous Blue Raincoat</td></tr>
                        <tr><td>George Orwell</td><td>Four legs good, two legs bad</td><td>Animal Farm</td></tr>
                        <tr><td>George Orwell</td><td>Four legs good, two legs ..better</td><td>Animal Farm</td></tr>
                        <tr><td>Rutger Hauer</td><td>I've seen things you people would not believe</td><td>BladeRunner</td></tr>
                        <tr><td>Frank Herbert</td><td>It was mostly sweet, and you where the sweetest of all</td><td>Dune Messiah</td></tr>
                        <tr><td>Seamus Heaney</td><td>I credit poetry for making this space-walk possible</td><td>Dune Messiah</td></tr>
                        <tr><td>Pablo Neruda</td><td>Sometimes i get up at dawn, and even my soul is wet</td><td>Twenty Love Poems and a Song of Despair</td></tr>
                    </table>

                <table>
                    <tr><th style={{backgroundColor: 'darkslategrey'}}>Photos/Credits</th></tr>
                    <tr><th>artist</th><th>photo</th><th>site</th></tr>
                    <tr><td>Henry Wadsworth Longfellow</td><td>Welcome to a foreign fireside</td><td>Unsplash</td></tr>
                    <tr><td>Leonard Cohen</td><td>Hope you're keeping some kind of record</td><td>Unsplash</td></tr>
                    <tr><td>George Orwell</td><td>Four legs good, two legs bad</td><td>Unsplash</td></tr>
                </table>

            </Container>
    )
}

export default Quotes