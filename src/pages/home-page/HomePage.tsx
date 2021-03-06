import React, {useState} from 'react';
// @ts-ignore
import s from './HomePage.module.scss';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {useHistory} from 'react-router-dom';

const HomePage = ()=>{
    const [fields,setFields] = useState<{'firstname':string,'lastname':string}>({firstname:'',lastname:''});
    const history = useHistory();

    const inputHandler = (field:string,value:string)=>{
        setFields({
            ...fields,
            [field]:value
        } as any);
    };

    const buttonHandler = ()=>{
        history.push('/room');
    };
    return (
        <div className={s.homePageContainer}>
            <form className={s.homePageForm}>
                <Input
                    type = "text"
                    placeholder="Enter your name"
                    onHandler={(value)=>inputHandler('firstname',value)}
                    value = {fields.firstname}
                    required={true}
                />
                <Input
                    type = "text"
                    placeholder="Enter your surname"
                    className={s.topSpace} onHandler={(value)=>inputHandler('lastname',value)}
                    value = {fields.lastname}
                    required={true}
                />
                <Button type="submit" text = "Login" className={s.homePageButton} onHandler={buttonHandler}/>
            </form>
        </div>
    )
};
export default HomePage;
