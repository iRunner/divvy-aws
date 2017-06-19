function homeController($scope, $http){

   $scope.getInfo = function(clickEvent) {
    $http.get('/api/accessKey/' + clickEvent.accessKey 
                                + '/secretKey/'
                                + clickEvent.secretKey)
      .then(function(response) {
          clickEvent.data_raw = response.data;
          console.log(response.data);
          clickEvent.data = [];
          for(let value of clickEvent.data_raw){
            clickEvent.data.push({
              'InstancesId': value.Instances['0'].InstanceId,
              'ReservationId': value['ReservationId'],
              'ImageId': value.Instances['0'].ImageId,
              'PrivateDnsName': value.Instances['0'].PrivateDnsName,
              'PrivateIpAddress': value.Instances['0'].PrivateIpAddress,
              'PublicDnsName': value.Instances['0'].PublicDnsName,
              'PublicIpAddress': value.Instances['0'].PublicIpAddress,

              'NetworkInterfaceId': value.Instances['0'].NetworkInterfaces['0'].NetworkInterfaceId,
              'MacAddress': value.Instances['0'].NetworkInterfaces['0'].MacAddress
            });
          }
          console.log(clickEvent.data);
      });
   };
    $scope.awskeys = {"key":"", data:[]};

};

export default homeController;
