import React from 'react'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormCheck,
  CButton,
  CRow,
  CCol,
} from '@coreui/react'

const FormPage = () => {
  return (
    <CForm>
      {/* ── Requestor Details ─────────────────────────────────────────────── */}
      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel htmlFor="requestorName">Requestor Name</CFormLabel>
          <CFormInput id="requestorName" type="text" placeholder="Jane Doe" />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="requestorCostCenter">Requestor Cost Center</CFormLabel>
          <CFormInput id="requestorCostCenter" type="text" placeholder="1234" />
        </CCol>
      </CRow>

      <div className="mb-3">
        <CFormLabel htmlFor="transitSafeNumber">Transit Safe Number</CFormLabel>
        <CFormInput id="transitSafeNumber" type="text" />
      </div>

      {/* ── Incident Details ──────────────────────────────────────────────── */}
      <div className="mb-3">
        <CFormLabel htmlFor="incidentType">Incident Type</CFormLabel>
        <CFormInput id="incidentType" type="text" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="reportingAgency">Reporting Police Agency</CFormLabel>
        <CFormInput id="reportingAgency" type="text" />
      </div>
      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel htmlFor="reportNumber">Report #</CFormLabel>
          <CFormInput id="reportNumber" type="text" />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="incidentTag">Incident / Tag #</CFormLabel>
          <CFormInput id="incidentTag" type="text" />
        </CCol>
      </CRow>
      <div className="mb-3">
        <CFormLabel htmlFor="incidentDateTime">Date / Time of Incident</CFormLabel>
        <CFormInput id="incidentDateTime" type="datetime-local" />
      </div>

      {/* ── Location of Incident ──────────────────────────────────────────── */}
      <h6 className="fw-semibold mt-4 mb-2">Location of Incident</h6>
      <div className="mb-3">
        <CFormLabel htmlFor="incidentAddress">Address</CFormLabel>
        <CFormInput
          id="incidentAddress"
          type="text"
          placeholder="123 Main St, Los Angeles, CA"
        />
        <CFormText>Enter the full street address if available.</CFormText>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="incidentCrossings">Street Crossings</CFormLabel>
        <CFormInput
          id="incidentCrossings"
          type="text"
          placeholder="Main St & 1st St"
        />
        <CFormText>Provide two intersecting streets when no exact address is known.</CFormText>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="incidentStreetNames">Street Name(s)</CFormLabel>
        <CFormInput
          id="incidentStreetNames"
          type="text"
          placeholder="Main St between 1st & 2nd"
        />
        <CFormText>Use this when the incident covers a road segment.</CFormText>
      </div>

      {/* ── Employee Details ─────────────────────────────────────────────── */}
      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel htmlFor="employeeName">Involved Employee Name</CFormLabel>
          <CFormInput id="employeeName" type="text" />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="employeeDob">Employee Date of Birth</CFormLabel>
          <CFormInput id="employeeDob" type="date" />
        </CCol>
      </CRow>

      {/* ── Vehicle Details ──────────────────────────────────────────────── */}
      <CRow className="mb-3">
        <CCol md={4} className="mb-3 mb-md-0">
          <CFormLabel htmlFor="busNumber">Bus #</CFormLabel>
          <CFormInput id="busNumber" type="text" />
        </CCol>
        <CCol md={4} className="mb-3 mb-md-0">
          <CFormLabel htmlFor="licensePlate">License Plate #</CFormLabel>
          <CFormInput id="licensePlate" type="text" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="trainCarNumber">Train Car Number(s)</CFormLabel>
          <CFormInput id="trainCarNumber" type="text" />
        </CCol>
      </CRow>

      {/* ── Other Involved Party ─────────────────────────────────────────── */}
      <CRow className="mb-3">
        <CCol md={4} className="mb-3 mb-md-0">
          <CFormLabel htmlFor="otherFirstName">Other Party First Name</CFormLabel>
          <CFormInput id="otherFirstName" type="text" />
        </CCol>
        <CCol md={4} className="mb-3 mb-md-0">
          <CFormLabel htmlFor="otherLastName">Other Party Last Name</CFormLabel>
          <CFormInput id="otherLastName" type="text" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="otherVehicleLicense">Other Vehicle License Plate</CFormLabel>
          <CFormInput id="otherVehicleLicense" type="text" />
        </CCol>
      </CRow>

      {/* ── Additional Notes ─────────────────────────────────────────────── */}
      <div className="mb-3">
        <CFormLabel htmlFor="additionalNotes">Additional Notes</CFormLabel>
        <CFormInput id="additionalNotes" type="text" component="textarea" rows={3} />
      </div>

      <CButton type="submit" color="primary">
        Submit
      </CButton>
    </CForm>
  )
}

export default FormPage
