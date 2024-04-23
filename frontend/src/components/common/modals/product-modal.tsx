import React from "react";
import { Modal } from "react-bootstrap";
import ProductDetailsUpper from "@/components/product-details/product-details-upper";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { handleOpenModal } from "@/redux/features/utility";



const ProductModal = () => {
  const { isShow, product } = useAppSelector((state) => state.utility);
  const dispatch = useAppDispatch();
  const handleModalClose = () => {
    dispatch(handleOpenModal())
  }
  return (
    <Modal
      show={isShow}
      onHide={() => handleModalClose()}
      centered={true}
      className="product-modal"
    >

      <div className="product__modal-wrapper p-relative">
        <div className="product__modal-close p-absolute">
          <button
            onClick={() => handleModalClose()}
          >
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="product__modal-inner">
          {product && <ProductDetailsUpper product={product} style_2={true} bottomShow={false} />}
        </div>
      </div>

    </Modal>
  );
};

export default ProductModal;
