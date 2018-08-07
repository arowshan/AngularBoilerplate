import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';
import { apiUrls } from './api-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClientService) {}

  signup(params) {
    return this.http.post(apiUrls.signup, params);
  }

  signin(params) {
    return this.http.post(apiUrls.signin, params);
  }

  uploadFile(fileToUpload: File): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post(apiUrls.upload, formData);
  }

  uploadMultiple(filesToUpload): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('files', filesToUpload);
    return this.http.post(apiUrls.uploadMultiple, formData);
  }

  download() {
    return this.http.getFile(
      apiUrls.download + `/${'1533571439622-NER-2004-2003.gif'}`
    );
  }

  getAllReservations() {
    return this.http.get(apiUrls.getAllReservations);
  }

  createReservation() {
    const params = {
      reservation: {
        employeeWitness: 'Y',
        waiver: 'Y',
        payment_method: 'Venmo',
        guests: [
          {
            firstname: 'John',
            lastname: 'Doe',
            email: 'jdoe2@gmail.com',
            phone: '415-585-5969',
            child: 'false'
          },
          {
            firstname: 'Susan',
            lastname: 'Doe',
            email: 'sdoe2@gmail.com',
            phone: '415-585-5470',
            child: 'false'
          }
        ],
        rentals: [
          {
            item: 'Small Boat',
            quantity: '3',
            price: '30.00'
          },
          {
            item: 'Kayak',
            quantity: '2',
            price: '40.00'
          }
        ]
      }
    };

    return this.http.post(apiUrls.createReservation, params);
  }
}
