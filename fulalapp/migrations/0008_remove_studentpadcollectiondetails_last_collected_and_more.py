# Generated by Django 4.0.3 on 2022-09-07 08:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fulalapp', '0007_studentpadcollectiondetails_regno'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentpadcollectiondetails',
            name='last_collected',
        ),
        migrations.DeleteModel(
            name='JoinStudentPadTable',
        ),
    ]