import React from 'react';
import Link from 'next/link';
import ChangePasswordForm from '../forms/change-password-form';

const ProfileMenuArea = () => {
  return (
    <section className="profile__menu pb-70 grey-bg">
    <div className="container">
      <div className="row">
        <div className="col-xxl-4 col-md-4">
          <div className="profile__menu-left bg-white mb-50">
            <h3 className="profile__menu-title"><i className="fa fa-list-alt"></i> Your Menu</h3>
            <div className="profile__menu-tab">
              <div className="nav nav-tabs flex-column justify-content-start text-start" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-account-tab" data-bs-toggle="tab" data-bs-target="#nav-account" type="button" role="tab" aria-controls="nav-account" aria-selected="true"> <i className="fa fa-user"></i> My Account </button>

                <button className="nav-link" id="nav-order-tab" data-bs-toggle="tab" data-bs-target="#nav-order" type="button" role="tab" aria-controls="nav-order" aria-selected="false"><i className="fa fa-file"></i> Orders </button>

                <button className="nav-link" id="nav-password-tab" data-bs-toggle="tab" data-bs-target="#nav-password" type="button" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa fa-lock"></i>Change Password</button>

                <button className="nav-link"><i className="fa fa-sign-out"></i> Logout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-8 col-md-8">
          <div className="profile__menu-right">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
                <div className="profile__info">
                  <div className="profile__info-top d-flex justify-content-between align-items-center">
                    <h3 className="profile__info-title">Profile Information</h3>
                    <button className="profile__info-btn" type="button" data-bs-toggle="modal"
                      data-bs-target="#profile_edit_modal">
                        <i className="fa-regular fa-pen-to-square"></i> 
                      Edit Profile
                    </button>
                  </div>

                  <div className="profile__info-wrapper white-bg">
                    <div className="profile__info-item">
                      <p>Name</p>
                      <h4>John Smith</h4>
                    </div>
                    <div className="profile__info-item">
                      <p>Email</p>
                      <h4>
                        <a href="mailt:outstock@hotmail.com" className="__cf_email__" data-cfemail="94fdfaf2fbd4f1f0e1fff1e6baf7fbf9">outstock@hotmail.com</a>
                      </h4>
                    </div>
                    <div className="profile__info-item">
                      <p>Phone</p>
                      <h4>(325) 463-5693</h4>
                    </div>
                    <div className="profile__info-item">
                      <p>Address</p>
                      <h4>Abingdon, Maryland(MD), 21009</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
                <div className="order__info">
                  <div className="order__info-top d-flex justify-content-between align-items-center">
                    <h3 className="order__info-title">My Orders</h3>
                    <button type="button" className="order__info-btn">
                      <i className="fa-regular fa-trash-can"></i> Clear
                    </button>
                  </div>

                  <div className="order__list white-bg table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="order__id">#3520</td>
                          <td><Link href='/product-details' className="order__title">University seminar series global.</Link>
                          </td>
                          <td>$144.00</td>
                          <td><Link href='/product-details' className="order__view-btn">View</Link></td>
                        </tr>
                        <tr>
                          <td className="order__id">#2441</td>
                          <td><Link href='/product-details' className="order__title">Web coding and apache basics</Link></td>
                          <td>$59.54</td>
                          <td><Link href='/product-details' className="order__view-btn">View</Link></td>
                        </tr>
                        <tr>
                          <td className="order__id">#2357</td>
                          <td><Link href='/product-details' className="order__title">Economics historical development</Link>
                          </td>
                          <td>$89.90</td>
                          <td><Link href='/product-details' className="order__view-btn">View</Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                <div className="password__change">
                  <div className="password__change-top">
                    <h3 className="password__change-title">Change Password</h3>
                  </div>
                  <div className="password__form white-bg">
                    <ChangePasswordForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProfileMenuArea;