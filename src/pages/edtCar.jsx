import { message,Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCars} from '../Redux/actions/vehicleAction';
import Spinner from "../Components/PageLoader";
import { Navbar } from "../Components/Navbar";
import Axios  from "axios";

function EditCar({match}){
    const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState();
  const [totalcars, settotalcars] = useState([]);
  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getCars());
    } else {
      settotalcars(cars);
      setcar(cars.find((o) => o._id == match.params.carid));
      console.log(car);
    }
  }, [cars]);
  function onFinish(val) {
    val.VehicleID = car.VehicleID;

    Axios.post('https://carz3330.netlify.app/editCar',{VehicleID:localStorage.getItem('vehicleID'),Description:val.Description, Year:val.Year, Type:val.Type, Category:val.Category}).then((res)=>{
      
        message.success("Your car edited successfully");
        console.log(res.data)
       
        }).catch((err)=>{
        console.log(err);

        message.error("Something went wrong , please try later");
      });
   }
  return (
    <div >
        <Navbar/>
         {loading && <Spinner />}
         <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {totalcars.length > 0 && (
            <Form
              initialValues={car}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
                <h3>Edit Car</h3>

                <hr />
            
                <Form.Item name='Description' label='Description' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='Year' label='Year' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='Type' label='Type' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='Category' label='Category' rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <div className="text-right">
                    <button className="btn1">Edit CAR</button>
                </div>
            </Form>
        )}
        </Col>
      </Row>
    </div>
  );
}
export default EditCar