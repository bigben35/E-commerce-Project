import React from 'react';
import { IProduct } from '@/types/product-d-t';
import Image from 'next/image';

// prop type
type IProps = {
  product:IProduct
}

const ProductDetailsBottom = ({product}:IProps) => {
  return (
    <div className="shop__bottom">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="product__details-tab">
            <div className="product__details-tab-nav text-center mb-45">
              <nav>
                <div className="nav nav-tabs justify-content-start justify-content-sm-center" id="pro-details" role="tablist">
                  <a className="nav-item nav-link active" id="des-tab" data-bs-toggle="tab" href="#des" role="tab" aria-controls="des" aria-selected="true" tabIndex={-1}>Description</a>
                  <a className="nav-item nav-link" id="add-tab" data-bs-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false" tabIndex={-1}>Additional Information</a>
                  <a className="nav-item nav-link" id="review-tab" data-bs-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false" tabIndex={-1}>Reviews ({product.reviews.length})</a>
                </div>
              </nav>
            </div>
            <div className="tab-content" id="pro-detailsContent">
              <div className="tab-pane fade show active" id="des" role="tabpanel" aria-labelledby='des-tab'>
                <div className="product__details-des">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {"industry's"} standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

                  <div className="product__details-des-list mb-20">
                    <ul>
                      <li><span>Claritas est etiam processus dynamicus.</span></li>
                      <li><span>Qui sequitur mutationem consuetudium lectorum.</span></li>
                      <li><span>Claritas est etiam processus dynamicus.</span></li>
                      <li><span>Qui sequitur mutationem consuetudium lectorum.</span></li>
                      <li><span>Claritas est etiam processus dynamicus.</span></li>
                      <li><span>Qui sequitur mutationem consuetudium lectorum.</span></li>
                    </ul>
                  </div>
                  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                </div>
              </div>
              
              <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby='add-tab'>
                <div className="product__details-add">
                  <ul>
                    <li><span>Weight</span></li>
                    <li><span>{product?.weight} KG</span></li>
                    <li><span>Dimention</span></li>
                    <li><span>{product?.dimension}</span></li>
                    <li><span>Size</span></li>
                    <li><span>XL, XXL, LG, SM, MD</span></li>
                  </ul>
                </div>
              </div>

              <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby='review-tab'>
                <div className="product__details-review">
                  <div className="postbox__comments">
                    <div className="postbox__comment-title mb-30">
                      <h3>Reviews (32)</h3>
                    </div>
                    <div className="latest-comments mb-30">
                      <ul>
                        {product?.reviews?.map((review, index) => (
                          <li key={index}>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <Image src={review.img} alt="review-img" width={78} height={79} />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>{review.name}</h5>
                                  <span> - {review.time} </span>
                                  <a className="reply" href="#">Leave Reply</a>
                                </div>
                                <div className="user-rating">
                                  <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                  </ul>
                                </div>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                              </div>
                            </div>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                  <div className="post-comments-form mb-100">
                    <div className="post-comments-title mb-30">
                      <h3>Your Review</h3>
                      <div className="post-rating">
                        <span>Your Rating :</span>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form id="contacts-form" className="conatct-post-form" action="#">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-icon p-relative contacts-name">
                            <input type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-icon p-relative contacts-name">
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-icon p-relative contacts-email">
                            <input type="text" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-icon p-relative contacts-message">
                            <textarea name="comments" id="comments" cols={30} rows={10}
                              placeholder="Comments"></textarea>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <button className="os-btn os-btn-black" type="submit">Post comment</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetailsBottom;