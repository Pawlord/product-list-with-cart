// Стили
import './confirm-modal.scss';

// React
import { useRef, useEffect } from 'react';

// Функции
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function ConfirmModal({ isOpen, setIsOpen }) {

    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            disableBodyScroll(modalRef.current)
        } else {
            enableBodyScroll(modalRef.current)
        }

        return () => clearAllBodyScrollLocks()
    }, [isOpen])

    return (
        <div className="modal-overlay" ref={modalRef}>
            <div className="modal"></div>
        </div>
    )
}