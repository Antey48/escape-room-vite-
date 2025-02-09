
function MainEmptyPage(): JSX.Element {
  return (
    <div className="container">
      <div className="page-content__title-wrapper">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
          квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
          Выберите тематику
            </h2>
          </div>

        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <h2 className="title">Нет Квестов</h2>
      </div>
    </div>
  );
}

export default MainEmptyPage;
