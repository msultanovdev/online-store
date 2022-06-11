import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
        ];
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"}
        ];
        this._diveces = [
            {id: 1, name: "Iphone 12 pro", price: 900, rating: 5, img: "https://texnomart.uz/ru/product/detail/87777"},
            {id: 1, name: "Iphone 13 pro", price: 1100, rating: 5, img: "https://texnomart.uz/ru/product/detail/87777"},
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
}