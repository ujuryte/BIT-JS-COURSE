import { useEffect, useState } from "react";
import axios from 'axios';

const URL = 'http://localhost:3003/trees'

export default function useTrees() {

    const [trees, setTrees] = useState(null);
    const [createTrees, setCreateTrees] = useState(null);
    const [editTrees, setEditTrees] = useState(null);
    const [deleteTrees, setDeleteTrees] = useState(null);

    const [lastUpdate, setLastUpdate] = useState(Date.now());



    useEffect(() => {
        axios.get(URL)
        .then (res => {
            setTrees(res.data.result)
        });
    }, [lastUpdate])

    useEffect(() => {
        if (null === createTrees){
            return;
        }
        axios.post(URL, createTrees)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
    }, [createTrees])


    useEffect(() => {
        if (null === deleteTrees){
            return;
        }
        axios.delete(URL + '/' + deleteTrees.id)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
    }, [deleteTrees]);

    useEffect(() => {
        if (null === editTrees){
            return;
        }
        axios.put(URL + '/' + editTrees.id, editTrees)
        .then(res => {
            
            console.log(res.data);
        })
    }, [editTrees])



    return [trees, setCreateTrees, setEditTrees, setDeleteTrees];
}