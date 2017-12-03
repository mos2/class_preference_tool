import {Injectable, OnInit} from '@angular/core';
import { PreferenceRecord} from './PreferenceRecord';

@Injectable()
export class DatabaseService implements OnInit {
  nano = null;
  db = null;

  constructor() { }

  ngOnInit() {
    this.nano = require('nano')('http://localhost:5984');
    this.db = this.nano.db.use('course_records');
  }

  save(record: PreferenceRecord ): void {
    this.db.insert(record, function(error, body, header) {
      if (error) {
        throw new Error(error);
      }
    });
  }
}
