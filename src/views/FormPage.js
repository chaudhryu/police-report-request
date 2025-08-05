import React from 'react'
import { CForm, CFormLabel, CFormInput, CFormText, CFormCheck, CButton } from '@coreui/react'

const FormPage = () => {


  return (
    <>
      <div>
        <CForm>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputEmail1">Requestor Name</CFormLabel>
            <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Requestor Cost Center</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Transit Safe Number</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Incident Type</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Reporting Police Agency</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Report #</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Incident/Tag #</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Date/Time of Incident</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Location of Incident</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Involved Employee Name</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Involved Employee Date of Birth</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Bus #</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">License Plate #</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Train Car Number(s):</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>  
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
            <CFormInput type="password" id="exampleInputPassword1" />
          </div>
          <CFormCheck
            className="mb-3"
            label="Check me out"
            onChange={(e) => {
              console.log(e.target)
            }}
          />
          <CButton type="submit" color="primary">
            Submit
          </CButton>
        </CForm>
      </div>
    </>
  )
}

export default FormPage
