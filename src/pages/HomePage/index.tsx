import styles from "./style.module.css";

export const HomePage = () => {
    return (
        <div className={styles.casinoHomepage}>
            <header className={styles.casinoHeader}>
                <h1>Добро пожаловать в Казино!</h1>
                <p>Играйте в лучшие игры и выигрывайте крупные джекпоты.</p>
                <button className={styles.playNowBtn}>Играть сейчас!</button>
            </header>

            <section className={styles.casinoBenefits}>
                <h2>Почему выбирают нас?</h2>
                <div className={styles.benefitList}>
                    <div className={styles.benefitItem}>
                        <h3>Щедрые бонусы</h3>
                        <p>Получайте до 500% на первый депозит.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <h3>Уникальные акции</h3>
                        <p>Еженедельные турниры и розыгрыши призов.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <h3>Широкий выбор игр</h3>
                        <p>Слоты, рулетка, покер и многое другое.</p>
                    </div>
                </div>
            </section>


            <section className={styles.depositForm}>
                <h2>Пополните счет и начните играть</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="amount">Сумма пополнения</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            placeholder="Введите сумму"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="payment-method">Способ оплаты</label>
                        <select id="payment-method" name="payment-method">
                            <option value="card">Банковская карта</option>
                            <option value="e-wallet">Электронный кошелек</option>
                            <option value="crypto">Криптовалюта</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.depositBtn}>
                        Пополнить счет
                    </button>
                </form>
            </section>
        </div>
    );
}