import Dropdown from 'react-bootstrap/Dropdown';
import redapple from './assets/red-apple.svg';
import blackapple from './assets/black-apple.svg';
import { useState, useEffect } from 'react';

function SelectionBar(props) {
    const { row, col } = props;
    const [selectedItem, setSelectedItem] = useState(null);
     const [show, setShow] = useState(false);
    const [cellmap, setCellmap] = useState({});

    console.log("&&&&&&&",cellmap);


    useEffect(() => {
        setCellmap(prev => {
            const newMap = { ...prev };
            if (selectedItem) {
                newMap[`${row}-${col}`] = selectedItem;
            }else {
                newMap[`${row}-${col}`]= null;
            }
            return newMap;
        });
    }, [selectedItem, row, col]);

    // const handleSelect = (eventKey) => {
    //    // console.log(`Selected: ${eventKey}`);
    //     setSelectedItem(eventKey);
    // }

    if(cellmap[`${row}-${col}`] !== null) {
        if(cellmap[`${row}-${col}`] === 'redapple') {
            return (
                <div className={'cell'}><img src={redapple} height={'50px'} width={'50px'} /></div>
            )
        } else if (cellmap[`${row}-${col}`] === 'blackapple') {
            return (
                <div className={'cell'}><img src={blackapple} height={'50px'} width={'50px'} /></div>
            )
        } else if (cellmap[`${row}-${col}`] === 'empty') {
            return (
                <div className={'cell'}></div>
            )
        }
    }

    return (
        <div className={'cell'} style={{position: 'relative', 'z-index': 4}}>
            <Dropdown  onToggle={(isOpen) => setShow(isOpen)} style={{  position: 'relative', 'z-index': 7, background: 'white' }}>
                <Dropdown.Item variant="success" id="dropdown" onClick={()=> handleSelect('menu')}>
                    select
                </Dropdown.Item>

               {cellmap[`${row}-${col}`]=='menu' && (
                    <div className='dropdown-content' className="dropdown-menu show" aria-labelledby="dropdown" style={{ display: 'flex', flexDirection: 'column'}}>
                        <Dropdown.Item onClick={() => setSelectedItem('redapple')}><img src={redapple} height={'20px'} width={'20px'} /></Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedItem('blackapple')}><img src={blackapple} height={'20px'} width={'20px'} /></Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedItem('empty')} style={{textDecoration: 'none', color: 'black'}}>Empty cell</Dropdown.Item>

                    </div>
                )}
                
            </Dropdown>
        </div>
    );
}

export default SelectionBar;