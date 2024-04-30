import VanillaWrapper from "../vanillaWrapper";

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;

  const pEl = document.createElement("p");
  pEl.textContent = "off";

  const btnEl = document.createElement("button");
  btnEl.textContent = "toggle";
  btnEl.addEventListener("click", () => {
    state = !state;
    pEl.textContent = state ? "on" : "off";
  });

  const divEl = document.createElement("div");
  divEl.textContent = "테스트2 - 바닐라";
  divEl.append(btnEl, pEl);

  wrapper.insertAdjacentElement("beforeend", divEl);
};

const Test2_Vanilla = () => <VanillaWrapper initiator={initiator} />;

export default Test2_Vanilla;
