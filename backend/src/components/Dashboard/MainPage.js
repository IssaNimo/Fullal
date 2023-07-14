import React from 'react'
import "./SideBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from './SideBar';
import  NavPage from './NavPage';



export default function MainPage() {
  return (
    <React.Fragment>
      <div id='dashboard'>
        <div class='w-90 mx-auto p-0 row'>
          <div className='col-0 col-sm-2'><div class="mb-4 mt-4 leftPanel"><div class="py-2 mb-4">
          <div class="d-flex flex-column px-2"><span class="text-capitalize" style={{fontSize: 'font-size: 1.2em'}}>Test One</span><span class="mt-2"><strong>Index Number: </strong> 70000</span><span class="mt-2"><strong>ID Number: </strong> 6464564</span><span class="mt-2"><strong>Email: </strong> test1@mail.com</span> <hr></hr></div>
              <SideBar />
              </div></div></div>
              <div  class="col-12 col-sm-10 pt-4">
              <NavPage />
            
              </div>
          </div>
          </div>
         
          
      </React.Fragment>
  )
}
<div class="w-90 mx-auto p-0 row">
<div class="col-0 col-sm-2"><div class="mb-4 mt-4 leftPanel"><div class="py-2 mb-4">
<div class="text-center"><img id="profile-photo" src="/files/YXZhdGFycy9XZWJzaXRlIGFuYWx5dGljcy05NWRmY2VmYy1kNmVmLTQyZmMtYWJhMC1iN2EyMDUzY2I1MmUucG5n" alt="my-profile"></img>
</div><hr></hr>
<div class="d-flex flex-column px-2"><span class="text-capitalize" style="font-size: 1.2em;">Test One</span><span class="mt-2"><strong>Index Number: </strong> 70000</span><span class="mt-2"><strong>ID Number: </strong> 6464564</span><span class="mt-2"><strong>Email: </strong> test1@mail.com</span></div>
<nav class="p-0 navbar navbar-expand navbar-light"><button aria-controls="fe-side-menu" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><i class="fa fa-bars" style="color: white;"></i></button>
<div class="navbar-collapse collapse"><div class="d-flex flex-column py-3 w-100 navbar-nav" id="fe-side-menu"><a aria-current="page" class="d-flex align-items-center active" href="/"><i class="fa fa-dashboard mr-2"></i><span>Home</span></a><a class="d-flex align-items-center" href="/indexing"><i class="fa fa-folder-o mr-2"></i><span>Indexing</span></a><a class="d-flex align-items-center" href="/exam-application"><i class="fa fa-graduation-cap mr-2"></i><span>Examination</span></a><a class="d-flex align-items-center" href="/documents"><i class="fa fa-file-text-o mr-2"></i><span>Documents</span></a><a class="d-flex align-items-center" href="/invoices"><i class="fa fa-credit-card mr-2"></i><span>Invoices</span></a><a class="d-flex align-items-center" href="/messages"><i class="fa fa-comments-o mr-2"></i><span>Messages</span></a><a class="d-flex align-items-center" href="/notifications"><i class="fa fa-bell-o mr-2"></i><span>Notifications</span></a><a href="/help"><i class="fa fa-question-circle mr-2"></i><span>Help</span></a></div></div></nav>
</div></div></div>
<div class="col-12 col-sm-10 pt-4">
<div class="d-flex flex-column pl-4"><span id="welcome-text" class="row pb-3">Welcome Test One</span><div class="row" style="gap: 1rem;"><div class="col-11 mx-auto mx-md-0 py-3 col-md-3 d-flex align-items-center justify-content-between" style="background: white; border-radius: 0px 0.5rem 0.5rem 0px; border-left: 3pt solid green;"><div class="d-flex flex-column justify-content-center"><span style="color: green;">Unread Messages</span><span style="font-size: 2rem; font-weight: 600;">0</span></div>
<i class="fa fa-comments-o fa-3x" style="color: rgb(169, 169, 169);"></i></div><div class="col-11 mx-auto mx-md-0 py-3 col-md-3 d-flex align-items-center justify-content-between" style="background: white; border-radius: 0px 0.5rem 0.5rem 0px; border-left: 3pt solid purple;"><div class="d-flex flex-column justify-content-center"><span style="color: purple;">Upaid Invoices</span><span style="font-size: 2rem; font-weight: 600;">0</span></div>
<i class="fa fa-credit-card-alt fa-3x" style="color: rgb(169, 169, 169);"></i></div><div class="col-11 mx-auto mx-md-0 py-3 col-md-3 d-flex align-items-center justify-content-between" style="background: white; border-radius: 0px 0.5rem 0.5rem 0px; border-left: 3pt solid orange;"><div class="d-flex flex-column justify-content-center"><span style="color: orange;">Ongoing Courses</span><span style="font-size: 2rem; font-weight: 600;">0</span></div><i class="fa fa-graduation-cap fa-3x" style="color: rgb(169, 169, 169);"></i></div></div>
<div class="row mt-3 card"><div class="cardHeader card-header"><h2>Active Applications</h2></div>
<div class="p-0 card-body"><div style="width: 100%; overflow-x: auto;">
<table class="table table-striped" role="table">
<col><col width="3%"><col width="40%"><col width="10%"><col width="30%">
<col width="5%"><col width="5%"></col>
<thead><tr role="row"><th class="align-bottom" scope="col" colspan="1" role="columnheader">
<div class="mt-4" title="Toggle SortBy" style="cursor: pointer;">#</div></th><th class="align-bottom" scope="col" colspan="1" role="columnheader">
<div class="mt-4" title="Toggle SortBy" style="cursor: pointer;">Service</div></th><th class="align-bottom" scope="col" colspan="1" role="columnheader">
<div class="mt-4" title="Toggle SortBy" style="cursor: pointer;">Ref No.</div></th><th class="align-bottom" scope="col" colspan="1" role="columnheader">
<div class="mt-4" title="Toggle SortBy" style="cursor: pointer;">Current Stage</div></th><th class="align-bottom" scope="col" colspan="1" role="columnheader"><div class="mt-4" title="Toggle SortBy" style="cursor: pointer;">Payment</div>
</th><th class="align-bottom" scope="col" colspan="1" role="columnheader">
<div class="mt-4">Actions</div></th></tr></thead><tbody role="rowgroup"><tr role="row"><td role="cell">4010</td><td role="cell"><div id="service"><span class="serviceName">Internships</span><br> </br>
<div class="showName"></div><small style="color: rgb(169, 169, 169);">09 September 2022 05:58:55 PM </small></div></td><td role="cell">NCK/IP/A00004</td><td role="cell">
<span id="current-stage" class="status-tag">Documents Review</span></td><td role="cell"><span class="badge badge-danger p-2"></span></td><td role="cell"><div id="view" aria-label="Actions" role="group" class="btn-group"><a title="View" class="btn btn-primary btn-sm" href="/applications/4010"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></a></div></td></tr><tr role="row"><td role="cell">4011</td><td role="cell"><div id="service"><span class="serviceName">Internships</span><br></br>
<div class="showName"></div><small style="color: rgb(169, 169, 169);">10 September 2022 09:57:55 AM </small></div></td><td role="cell">NCK/IP/A00005</td><td role="cell"><span id="current-stage" class="status-tag">Documents Review</span></td><td role="cell"><span class="badge badge-danger p-2"></span></td><td role="cell"><div id="view" aria-label="Actions" role="group" class="btn-group"><a title="View" class="btn btn-primary btn-sm" href="/applications/4011"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></a></div></td></tr></tbody><tfoot><tr class="table-light"><td colspan="1000"><div class="d-flex justify-content-between align-items-center"><span>Showing 2 of ~10 results</span><div class="d-flex justify-content-end align-items-center"><div class="col-md-2 text-md-right mr-2 text-nowrap"><span>Page 1 of 1</span></div><nav aria-label="Pagination"><ul class="pagination" style="margin: 0px;">
<li class="page-item disabled"><div class="page-link" aria-label="First"><span aria-hidden="true">«&nbsp;First</span></div></li><li class="page-item disabled"><div class="page-link" aria-label="Previous"><span aria-hidden="true">‹&nbsp;Previous</span></div></li><li class="page-item disabled"><div class="page-link" aria-label="Next"><span aria-hidden="true">Next&nbsp;›</span></div></li><li class="page-item disabled"><div class="page-link" aria-label="Last"><span aria-hidden="true">Last&nbsp;»</span></div></li></ul></nav>
<input type="number" class="form-control" min="1" max="1" placeholder="Page[1-1]"><select class="form-control"><option value="5">Show 5</option><option value="10">Show 10</option><option value="20">Show 20</option><option value="30">Show 30</option><option value="40">Show 40</option><option value="50">Show 50</option><option value="100">Show 100</option></select></input> </div></div></td></tr></tfoot></col></col></col></col></col></col></table></div></div></div></div></div></div> 

