import React from 'react';

const OrderComplete = () => {
  return (
    <div id="wrap">
      <div id="content" class="content nav_empty">
        <section class="order_complete">
          <h2 class="blind">주문 완료</h2>

          <div class="order_header no_check">
            <p class="orderstate-type-1" id="waitTimeEl"></p>
            <p class="complete_al">
              <ul class="order_content">
                <li class="store_info">
                  <dl>
                    <dt>매장정보</dt>
                    <dd>
                      <ul>
                        <li>매장명 : 홍콩반점</li>
                        
                        <li>
                          <strong class="fst_col">수령시간</strong>
                          <strong class="last_col highlight">준비완료 후 수령 가능</strong>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>

                <li class="order_history">
                  <dl>
                    <dt>주문내역</dt>
                    <dd>
                      <ul class="btm_list">
                        <li>
                          <strong class="fst_col">짜장면</strong>
                          <strong class="sec_col">3,500 원</strong>
                        </li>
                      </ul>
                    </dd>
                  </dl>

                  <dl class="orderAmount">
                    <dt>총 주문 금액</dt>
                    <dd>3,500 원</dd>
                  </dl>
                  <div class="row_total discount2">
                    <p class="txt_total">총 결제 금액</p>
                    <p class="num_total">
                      3,500<span class="price_unit"> 원</span>
                    </p>
                  </div>
                </li>
                <li class="method_detail">
                  <dl>
                    <dt></dt>
                    <dd>
                      <ul>
                        <li>
                          <strong class="fst_col">승인일시</strong>
                          <strong class="last_col">20200603</strong>
                        </li>
                        <li>
                          <strong class="fst_col">승인번호</strong>
                          <strong class="last_col"></strong>
                        </li>
                        <li>
                          <strong class="fst_col">결제수단</strong>
                          <strong class="last_col">신용카드</strong>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default OrderComplete;
