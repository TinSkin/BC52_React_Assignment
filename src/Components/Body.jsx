import React, { useState } from "react";

import data from './../dataGlasses.json';

export default function () {
    // List Button Glasses
    const list_glasses = data
    const button_glass = list_glasses.map((item) => {
        return (
            <button key={item.id} className='glass_button btn' onClick={() => update(item.name, item.desc, item.url)}>
                <img src={item.url} alt="" />
            </button>
        )
    })

    // State
    // const glass = {
    //     name: '',
    //     desc: '',
    //     url: ''
    // };

    const [glass_data, setAllValues] = useState({
        name: '',
        desc: '',
        url: ''
    });

    const update = (name_value, desc_value, url_value) => {
        setAllValues({
            ...glass_data,
            name: name_value,
            desc: desc_value,
            url: url_value
        })
    }

    const display = <img className='overlay_glass' style={{display: glass_data.url ? 'block' : 'none' }} src={glass_data.url} alt="" />

    return (
        <div>
            <div className='model_img'>
                <div className='model_left card'>
                    <img className='model' src="./glassesImage/model.jpg" alt="" />
                    <img className='overlay_glass' src="./glassesImage/v7.png" alt="" />
                    <div className='model_bottom'>
                        <h2>FENDI F8750</h2>
                        <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                    </div>
                </div>
                <div className='model_right'>
                    <img src="./glassesImage/model.jpg" alt="" />
                    {display}
                    <div className='model_bottom'>
                        <h2>{glass_data.name}</h2>
                        <p>{glass_data.desc}</p>
                    </div>
                </div>
            </div>
            <div className='group_glasses'>
                {button_glass}
            </div>
        </div>
    )
}

