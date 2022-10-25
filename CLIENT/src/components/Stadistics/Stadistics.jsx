import React, { useEffect } from 'react';
import { getSellsHistory } from "../../redux/actions/index.js"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SellsGraphic from "../SellsGraphic/SellsGraphic.jsx"

const Stadistics = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSellsHistory())
    }, [])

    const sellsHistory = useSelector(state => state.sellsHistory)

    const listNumbers = (num) => {
        let numbers = [];
        for (let i = 1; i <= num; i++) {
            numbers.push(i.toString())
        }
        return numbers;
    }

    const daysMonth = () => {
        const thisMonth = Date().split(" ")[1]
        const thirtyDays = ["Abr", "Jun", "Sep", "Nov"]
        const thirtyOneDays = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"]
        let daysOfThisMonth = [];
        if (thirtyDays.includes(thisMonth)) {
            daysOfThisMonth = listNumbers(30)
        } else if (thirtyOneDays.includes(thisMonth)) {
            daysOfThisMonth = listNumbers(31)
        } else {
            daysOfThisMonth = listNumbers(28)
        }
        return daysOfThisMonth
    }

    const sellsForDays = () => {
        const thisMonth = Date().split(" ")[1]
        const thisYear = Date().split(" ")[3]
        let sellsDays = []
        /* sellsHistory.length ? sellsHistory.forEach() : null */
    }

    const randomSells = () => {
        let randomSell = Math.floor(Math.random() * 10)
        return randomSell
    }

    const sellsInProcess = () => {
        let auxSells = []
        for (let i = 1; i <= 31; i++) {
            auxSells.push(randomSells())
        }
        return auxSells
    }

    /* const days = ["22", "23", "24", "25", "26", "27"] */
    const days = daysMonth()
    const sells = sellsInProcess()

    return (
        <div>
            <h1>Panel de Control</h1>
            <div>
                <SellsGraphic 
                    days={days}
                    sells={sells}
                />
                {
                    sellsHistory.length ? sellsHistory.map(sell => {
                        return (
                            <div>
                                <img src={sell.img} alt="foto" />
                                <h4>{sell.name}</h4>
                                <p>{sell.buyer}</p>
                                <p>{sell.location}</p>
                                <Link to={`/sell/${sell.id}`}>
                                    <p>Más detalles de la compra</p>
                                </Link>
                            </div>
                        )
                    }) : <h2>Aquí van a aparecer las ventas que hayas realizado</h2>
                }
            </div>
        </div>
    );
};

export default Stadistics;