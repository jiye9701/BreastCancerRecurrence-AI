import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const ageValues = ['20-29', '30-39', '40-49', '50-59', '60-69', '70-79'];
const menopauseValues = ['ge40', 'lt40', 'premeno'];
const tumorSizeValues = ['0-4','5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54'];
const invNodesValues  = ['0-2', '3-5', '6-8', '9-11', '12-14', '15-17', '24-26'];
const nodeCapsValues = ['yes', 'no'];
const degMaligValues  = ['1', '2', '3'];
const breastValues  = ['left', 'right'];
const breastQuadValues = ['central', 'left_low', 'left_up', 'right_low','right_up'];
const irradiatValues = ['yes', 'no'];

function Form() {
  const history = useHistory();
  const [data, setData] = useState({
    'age': `'${ageValues[0]}'`,
    'menopause': `'${menopauseValues[0]}'`,
    'tumor-size': `'${tumorSizeValues[0]}'`,
    'inv-nodes': `'${invNodesValues[0]}'`,
    'node-caps': `'${nodeCapsValues[0]}'`,
    'deg-malig': `'${degMaligValues[0]}'`,
    'breast': `'${breastValues[0]}'`,
    'breast-quad': `'${breastQuadValues[0]}'`,
    'irradiat': `'${irradiatValues[0]}'`
  })
  const [showLoading, setShowLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);

    const fetchData = async () => {
      try {
        const result = await axios.post('http://localhost:12345/predict', data)
        if (result?.data?.prediction) {
          const prediction = JSON.parse(result.data.prediction);
          setShowLoading(false)
          history.push({
            pathname: '/result',
            state: {
              data: data,
              result: prediction[0]
            }
          })
        }
      } catch {
        console.log('error in fetching data')
        history.push({
          pathname: '/error'
        })
      }
    };  
    fetchData();
  }

  return (
    <div className="container width-500 mt-5 p-3 shadow rounded bg-white">
      <h1 className="text-center pb-3">Breast Cancer Recurrence Form</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>

        {/* age */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>age</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "age": `'${e.target.value}'`})}>
              {
                ageValues.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* menopause */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>menopause</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "menopause": `'${e.target.value}'`})}>
              {
                menopauseValues.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* tumor-size */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>tumor-size</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "tumor-size": `'${e.target.value}'`})}>
              {
                tumorSizeValues.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* inv-nodes */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>inv-nodes</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "inv-nodes": `'${e.target.value}'`})}>
              {
                invNodesValues.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* node-caps */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>node-caps</label>
          <div className='ml-1 align-self-center col-sm-8 row'>
            {
              nodeCapsValues.map((value, index) =>
                <div className="form-check col-sm-3" key={index}>
                  <input className="form-check-input" type="radio" name="nodeCaps" value={value} defaultChecked={data['node-caps'] === `'${value}'`} onChange={(e) => setData({...data, "node-caps": `'${e.target.value}'`})}/>
                  <label className="form-check-label">{value}</label>
                </div>      
              )
            }
          </div>
        </div>

        {/* deg-malig */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>deg-malig</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "deg-malig": `'${e.target.value}'`})}>
              {
                degMaligValues.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* breast */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>breast</label>
          <div className='ml-1 align-self-center col-sm-8 row'>
            {
              breastValues.map((value, index) => 
                <div className="form-check col-sm-3" key={index}>
                  <input className="form-check-input" type="radio" name="breast" value={value} defaultChecked={data.breast === `'${value}'`} onChange={(e) => setData({...data, "breast": `'${e.target.value}'`})}/>
                  <label className="form-check-label">{value}</label>
                </div>
              )
            }
          </div>
        </div>

        {/* breast-quad */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>breast-quad</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "breast-quad": `'${e.target.value}'`})}>
              {
                breastQuadValues.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* irradiat */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>irradiat</label>
          <div className='ml-1 align-self-center col-sm-8 row'>
            {
              irradiatValues.map((value, index) =>
                <div className="form-check col-sm-3" key={index}>
                  <input className="form-check-input" type="radio" name="irradiat" value={value} defaultChecked={data.irradiat === `'${value}'`} onChange={(e) => setData({...data, "irradiat": `'${e.target.value}'`})}/>
                  <label className="form-check-label">{value}</label>
                </div>      
              )
            }
          </div>
        </div>
        
        {
          !showLoading ? 
            (<button type="submit" className="btn btn-primary">Predict</button>)
            :(
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            )
        }

      </form>
    </div>
  )
}
export default Form;
