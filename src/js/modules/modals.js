const modals = () => {
   function bindModal(trigger, modal, close) {
      trigger.addEventListener('click', (e) => {
         if (e.target) {
            e.preventDefault();
         }

         modal.style.display = 'block';
         document.body.style.overflow = 'hidden';
      });

      close.addEventListener('click', () => {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      });
   }

   const callEngineerBtn = document.getElementsByClassName('popup_engineer_btn')[0],
      modalEngineer = document.getElementsByClassName('popup_engineer')[0],
      modalEngineerClose = document.getElementsByClassName('popup_engineer .popup_close')[0];

   bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};





export default modals;