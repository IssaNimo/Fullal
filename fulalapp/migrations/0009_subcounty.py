# Generated by Django 4.1.2 on 2022-11-15 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fulalapp', '0008_remove_studentpadcollectiondetails_last_collected_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubCounty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SubCounty_name', models.CharField(max_length=255)),
                ('SubCounty_Id', models.CharField(max_length=255)),
            ],
        ),
    ]