import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function App() {
  return (
    <div className='wrapper bg-dark d-flex align-item-center justify-content-center w-100'>
      <div className='login'>
        <h3 className='mb-3'>Car Return Processing Section</h3>
        <form className='needs-validation'>
          <h5 align="center">ITEM RETURNEE</h5>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='clientid' className='form-label'>Client ID</lebal>
            <select>
              <option>
                101
              </option>
              <option>
                102
              </option>
            </select>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='clientname' className='form-label'>Client Name</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='drivername' className='form-label'>Driver's Name</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='durationdate' className='form-label'>Duration Date</lebal>
            <input type="date" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='passenger' className='form-label'>Passenger(s)</lebal>
            <input type="number" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='clientname' className='form-label'>Client Name</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='drivername' className='form-label'>Driver's Name</lebal>
            <select>
              <option>
                Santosh Singh
              </option>
              <option>
                Rahul
              </option>
            </select>
          </div>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='duradate' className='form-label'>Duration Date From</lebal>
                <input type="date" className='form-control' required></input>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='duradate' className='form-label'>To</lebal>
                <input type="date" className='form-control' required></input>
              </div>
            </th>
          </table>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='passenger' className='form-label'>Passenger(s)</lebal>
            <select>
              <option>
                45
              </option>
              <option>
                78
              </option>
            </select>
          </div>
          <hr/>
          <h5 align="center">CAR RENT</h5>
          <div className='form-group was-validated mb-2'>
                <lebal htmlFor='plateno' className='form-label'>Plate No.</lebal>
                <select>
                  <option>
                    Red
                  </option>
                  <option>
                    Green
                  </option>
                </select>
              </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='carmodel' className='form-label'>Car Model</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='condition' className='form-label'>Condition</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='brandname' className='form-label'>Brand Make</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='mileage' className='form-label'>Mileage</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='tanklevel' className='form-label'>Tank Level</lebal>
            <input type="text" className='form-control' required></input>
          </div>

          <table className='inpu'>
            <th><button type='submit' className='btn btn-success w-100 mt-2'>Submit</button></th>
            <th><button type='reset' className='btn btn-success w-100 mt-2'>Reset</button></th>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
