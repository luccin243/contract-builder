import React, { useState } from 'react';
import BoxSize from './inputs/BoxSize'
import ImgSize from './inputs/ImgSize'
import TitleRow from './TitleRow'
import TitleBox from '../../common/TitleBox'
import useGetInputValue from '../customHooks/useGetInputValue'

const StyleImg = () => {
    const [getStyleValue, changeStyle] = useGetInputValue()
    const [openedSections, setOpenedSections] = useState({
        margin: true,
        padding: false,
    })

    const openSections = (key) => {
        setOpenedSections({ ...openedSections, [key]: !openedSections[key] })
    }

    return (
        <div>
            <TitleBox title={'Image Style'} />
            <ImgSize
                show={true}
                width={getStyleValue('width')}
                height={getStyleValue('height')}
                onChange={changeStyle}
            />
            <TitleRow
                title={'Margin'}
                onClick={() => openSections('margin')}
                opened={openedSections.margin}
            />
            <BoxSize
                onChange={changeStyle}
                valueTop={getStyleValue('marginTop')}
                valueBottom={getStyleValue('marginBottom')}
                valueLeft={getStyleValue('marginLeft')}
                valueRight={getStyleValue('marginRight')}
                show={openedSections.margin}
                sides
            />
            <TitleRow
                title={'Padding'}
                onClick={() => openSections('padding')}
                opened={openedSections.padding}
            />
            <BoxSize
                onChange={changeStyle}
                valueTop={getStyleValue('paddingTop')}
                valueBottom={getStyleValue('paddingBottom')}
                valueLeft={getStyleValue('paddingLeft')}
                valueRight={getStyleValue('paddingRight')}
                show={openedSections.padding}
                sides
                type={'padding'}
            />
        </div>
    );
};

export default StyleImg;