import { defineStore } from 'pinia'
export const useCartStore = defineStore({
    id: 'cart',
    state: () => {
        return {
            cartList: [], //购物车数据
            select: [],   //选中商品的id
        }
    },
    actions: {
        addCart(list) {
            list.forEach(item => {
                item['check'] = true
                this.select.push(item.id)
            });
            this.cartList = list
        },
        // 全选
        all() {
            this.select = this.cartList.map(item => {
                item['check'] = true
                return item.id
            })
        },
        // 全不选
        unAll() {
            this.cartList.forEach(item => {
                item['check'] = false
            })
            this.select = []
        },
        // 单选
        itemChecked(id) {
            // 检查select中是否含有
            if (this.select.indexOf(id) > -1) {
                this.cartList.forEach(item => {
                    if (item.id == id) {
                        item['check'] = false   //设置为False
                    }
                });
                const _this = this
                this.select.forEach(function (item, index) {
                    if (item == id) {
                        _this.select.splice(index, 1)
                    }

                })
            } else {
                this.cartList.forEach(item => {
                    if (item.id == id) {
                        item['check'] = true   //设置为true
                    }
                });
                this.select.push(id)
            }

        }


    },
    getters: {
        isChecked() {
            return this.select.length == this.cartList.length
        },
        // 总价
        total() {
            const _this = this
            let total = {
                price: 0,
                number: _this.select.length
            }
            this.cartList.forEach(v => {
                if (_this.select.indexOf(v.id) != -1) {
                    total.price += v.discountPrice * v.counter
                }
            })
            return total
        }
    }
})