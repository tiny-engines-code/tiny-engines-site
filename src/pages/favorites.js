import React from "react";
import '../styles/table.css'
import {ContentLayout} from "../components/ContentLayout";
import {ContentWrapper} from "../elements";
import {ContentTitle} from "../elements";

const Quotes = () => {
        return (
            <ContentLayout>
            <ContentTitle>Credits</ContentTitle>
                <ContentWrapper>
                        <table style={{marginTop: '50px'}}>
                            <tr><th  style={{backgroundColor: 'darkslategrey'}}>Quotes in this site</th></tr>
                            <tr><th>author</th><th>quote</th><th>referenced</th></tr>
                            <tr><td>Henry Wadsworth Longfellow</td><td>Welcome to a foreign fireside</td><td>To An Old Danish Songbook</td></tr>
                            <tr><td>Leonard Cohen</td><td>Hope you're keeping some kind of record</td><td>Famous Blue Raincoat</td></tr>
                            <tr><td>George Orwell</td><td>Four legs good, two legs bad</td><td>Animal Farm</td></tr>
                            <tr><td>George Orwell</td><td>Four legs good, two legs ..better</td><td>Animal Farm</td></tr>
                            <tr><td>Rutger Hauer</td><td>I've seen things you people would not believe</td><td>BladeRunner</td></tr>
                            <tr><td>Frank Herbert</td><td>It was mostly sweet, and you where the sweetest of all</td><td>Dune Messiah</td></tr>
                            <tr><td>Seamus Heaney</td><td>I credit poetry for making this space-walk possible</td><td>Nobel Lecture</td></tr>
                            <tr><td>Pablo Neruda</td><td>Sometimes i get up at dawn, and even my soul is wet</td><td>Twenty Love Poems and a Song of Despair</td></tr>
                        </table>

                    <table>
                        <tr><th style={{backgroundColor: 'darkslategrey'}}>Photos/Credits</th></tr>
                        <tr><th>photo</th><th>artist</th></tr>
                        <tr><td>boy yelling</td><td>Photo by <a href="https://unsplash.com/@jasonrosewell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Rosewell</a> on <a href="https://unsplash.com/s/photos/microphone-boy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></td></tr>
                        <tr><td>mail boy</td><td>Photo by <a href="https://unsplash.com/@museumsvictoria?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Museums Victoria</a> on <a href="https://unsplash.com/s/photos/history-boy-uniform-envelope?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </td></tr>
                        <tr><td>broken piano</td><td>Photo by <a href="https://unsplash.com/@a_d_s_w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adrian Swancar</a> on <a href="https://unsplash.com/s/photos/broken-piano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></td></tr>
                        <tr><td>clown with viloin</td><td>Photo by <a href="https://unsplash.com/@soberanes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Uriel Soberanes</a> on <a href="https://unsplash.com/s/photos/clown-violin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> </td></tr>
                         <tr><td>main in labcoat</td><td>Photo by <a href="https://unsplash.com/@austriannationallibrary?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Austrian National Library</a> on <a href="https://unsplash.com/s/photos/vintage-scientist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>                                                                                              </td></tr>
                   </table>
                </ContentWrapper>
            </ContentLayout>
    )
}

export default Quotes