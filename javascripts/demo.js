document.getElementById('defaultBtn').addEventListener('click',function(){
  DestinyModal({
    'title': 'Default',
    'text': 'This is a default modal.',
    'type': 'default',
    'buttons':[
      {'text':'Dismiss','class':'destiny-dismiss'}
    ]
  }).add();
},false);
document.getElementById('primaryBtn').addEventListener('click',function(){
  DestinyModal({
    'title': 'Primary',
    'text': 'This is a primary modal.',
    'type': 'primary',
    'buttons':[
      {'text':'Dismiss','class':'destiny-dismiss'}
    ]
  }).add();
},false);
document.getElementById('successBtn').addEventListener('click',function(){
  DestinyModal({
    'title': 'Success',
    'text': 'This is a success modal.',
    'type': 'success',
    'buttons':[
      {'text':'Dismiss','class':'destiny-dismiss'}
    ]
  }).add();
},false);
document.getElementById('infoBtn').addEventListener('click',function(){
  DestinyModal({
    'title': 'Info',
    'text': 'This is a info modal.',
    'type': 'info',
    'buttons':[
      {
        'text':'Accept',
        'class':'accept-modal',
        'function': (function(){
          DestinyModal({
            'title': 'Accepted',
            'text': 'This is a modal in a modal.',
            'type': 'success',
            'buttons':[
              {'text':'Dismiss','class':'destiny-dismiss'},
              {'text':'Dismiss All','class':'destiny-dismiss-all'}
            ]
          }).add();})
      },
      {'text':'Dismiss','class':'destiny-dismiss'}
    ]
  }).add();
},false);
document.getElementById('warningBtn').addEventListener('click',function(){
  DestinyModal({
    'title': 'Warning',
    'text': 'This is a warning modal.',
    'type': 'warning',
    'buttons':[
      {'text':'Dismiss','class':'destiny-dismiss'}
    ],
    'animation': true
  }).add();
},false);
document.getElementById('dangerBtn').addEventListener('click',function(){
  DestinyModal({
    'title': 'Danger',
    'text': 'This is a danger modal.',
    'type': 'danger',
    'buttons':[
      {'text':'Dismiss','class':'destiny-dismiss'}
    ]
  }).add();
},false);