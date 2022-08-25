import React from "react";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успішно!</h3>
      <p>Усім {count} користувачам відправлено запрошення.</p>
      <a href="/">
        <button className="send-invite-btn">Назад</button>
      </a>
    </div>
  );
};
