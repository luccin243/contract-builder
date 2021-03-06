import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import Column from '../elements/Column'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    card: props => (props)
}))

const Row = ({ rowId }) => {
    const dispatch = useDispatch()
    const { currentId } = useSelector(state => state.editable)
    const _row = useSelector(state => state.contractDom.rows[rowId])
    const [hover, setHover] = useState(false)
    const props = { ..._row.style }
    const classes = useStyle(props)

    const onLeave = (e) => {
        e.stopPropagation()
        setHover(false)
    }

    const onEnter = (e) => {
        e.stopPropagation()
        setHover(true)
    }

    const editRow = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_row))
    }
    return (
        <Card
            className={classes.card}
            elevation={(rowId === currentId || hover) ? 3 : 0}
            onClick={editRow}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {_row.columns.map((columnId) => {
                return <Column key={columnId} columnId={columnId} />
            })}
        </Card>
    )
}

export default Row
